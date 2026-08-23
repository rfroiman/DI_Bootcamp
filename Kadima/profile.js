const onboarding=JSON.parse(localStorage.getItem("kadimaOnboarding")||"{}");const lang=["en","pt","es"].includes(onboarding.language)?onboarding.language:"en";const $=id=>document.getElementById(id);const state={contact:{},careerStage:"",answers:{},history:[],currentQuestionId:null,complete:false,fingerprint:{identity:[],paths:[],context:[],direction:[],transferable:[]}};
const backToDetailsButton=$("backToDetailsButton");
const profileCompletionState=$("profileCompletionState");
const careerPathCards=$("careerPathCards");
let pending=[];const labels={experienced:"Experienced professional",early:"Early-career professional",student:"Student",firstjob:"Looking for my first job",changing:"Changing careers",returning:"Returning to the job market",sales:"Sales & Business",technology:"Technology",finance:"Finance",operations:"Operations",marketing:"Marketing",healthcare:"Healthcare",engineering:"Engineering",education:"Education",creative:"Creative",legal:"Legal",hospitality:"Hospitality",other:"Something else",newOnly:"Focus on my new field",both:"Keep both paths open",exploring:"I am still exploring",enterpriseSales:"Enterprise / B2B Sales",accountManagement:"Account Management",businessDevelopment:"Business Development",customerSuccess:"Customer Success",presales:"Pre-Sales",partnerships:"Partnerships",salesOps:"Sales Operations",software:"Software Development",dataAI:"Data & AI",cybersecurity:"Cybersecurity",product:"Product",support:"Technical Support",projectMgmt:"Project / Program Management",enterprise:"Enterprise",smb:"SMB",b2b:"B2B",b2c:"B2C",startup:"Startup",multinational:"Multinational",regulated:"Regulated industry",public:"Public sector",buildApps:"Build applications",dataWork:"Work with data",aiWork:"Work with AI",customerWork:"Work with customers",leadPeople:"Lead people",strategy:"Work on strategy",international:"Work internationally",complexDeals:"Handle complex deals",technicalBase:"Technical background",businessBase:"Business understanding",customerBase:"Customer-facing experience",projectBase:"Project management",problemBase:"Problem solving",leadershipBase:"Leadership experience",learning:"Currently learning / training",projects:"Building projects",internship:"Internship experience",professional:"Professional experience"};const q={careerStage:{type:"single",text:"Which situation best describes you today?",help:"This determines how Kadima adapts the rest of your Profile journey.",options:["experienced","early","student","firstjob","changing","returning"]},existingDomains:{type:"multi",text:"Which professional areas are part of your background?",help:"Choose everything that genuinely represents your professional history.",options:["sales","technology","finance","operations","marketing","healthcare","engineering","education","creative","legal","hospitality","other"]},transitionIntent:{type:"single",text:"How do you want Kadima to treat your career transition?",help:"A career change does not mean you must abandon your previous path.",options:["newOnly","both","exploring"]},emergingPath:{type:"multi",text:"Which new directions are you preparing for or exploring?",help:"Select as many as needed. Kadima can maintain multiple opportunity paths.",options:["software","dataAI","cybersecurity","product","technology","sales","projectMgmt","support","other"]},functionalIdentity:{type:"multi",text:"What kind of work best represents what you actually do?",help:"Focus on function, not job title.",options:["enterpriseSales","accountManagement","businessDevelopment","customerSuccess","presales","partnerships","salesOps","software","dataAI","projectMgmt","support","other"]},context:{type:"multi",text:"In which environments have you built most of your experience?",help:"Context can be as important as the function itself when matching opportunities.",options:["enterprise","smb","b2b","b2c","startup","multinational","regulated","public","other"]},nextDirection:{type:"multi",text:"What would you like to do more of in your next opportunity?",help:"Kadima uses this to understand career-direction fit.",options:["buildApps","dataWork","aiWork","customerWork","leadPeople","strategy","international","complexDeals","other"]},transferable:{type:"multi",text:"Which parts of your background should strengthen your other career paths?",help:"This is especially important when you are changing or expanding your career.",options:["technicalBase","businessBase","customerBase","projectBase","problemBase","leadershipBase","other"]},exposure:{type:"multi",text:"What kind of practical exposure do you already have in this direction?",help:"Formal employment is not the only valid evidence.",options:["learning","projects","internship","professional","other"]}};const arr=v=>Array.isArray(v)?v:[v];function save(){localStorage.setItem("kadimaProfile",JSON.stringify({...state,language:lang,location:onboarding.location||"",countryCode:onboarding.countryCode||""}))}function next(){const a=state.answers;if(!a.careerStage)return"careerStage";if(["changing","returning"].includes(a.careerStage)){if(!a.existingDomains)return"existingDomains";if(!a.transitionIntent)return"transitionIntent";if(!a.emergingPath&&a.transitionIntent!=="newOnly")return"emergingPath";if(!a.functionalIdentity)return"functionalIdentity";if(!a.context)return"context";if(!a.transferable)return"transferable";if(!a.nextDirection)return"nextDirection";return null}if(["student","firstjob"].includes(a.careerStage)){if(!a.emergingPath)return"emergingPath";if(!a.exposure)return"exposure";if(!a.nextDirection)return"nextDirection";return null}if(!a.existingDomains)return"existingDomains";if(!a.functionalIdentity)return"functionalIdentity";if(!a.context)return"context";if(!a.nextDirection)return"nextDirection";return null}function renderFP(){const a=state.answers,f={identity:[],paths:[],context:[],direction:[],transferable:[]};if(a.careerStage)f.identity.push(labels[a.careerStage]);if(a.functionalIdentity)f.identity.push(...arr(a.functionalIdentity).map(x=>labels[x]||x));if(a.existingDomains)f.paths.push(...arr(a.existingDomains).map(x=>labels[x]||x));if(a.emergingPath)f.paths.push(...arr(a.emergingPath).map(x=>labels[x]||x));if(a.context)f.context.push(...arr(a.context).map(x=>labels[x]||x));if(a.exposure)f.context.push(...arr(a.exposure).map(x=>labels[x]||x));if(a.transitionIntent)f.direction.push(labels[a.transitionIntent]||a.transitionIntent);if(a.nextDirection)f.direction.push(...arr(a.nextDirection).map(x=>labels[x]||x));if(a.transferable)f.transferable.push(...arr(a.transferable).map(x=>labels[x]||x));state.fingerprint=f;[["fpIdentity","identity"],["fpPaths","paths"],["fpContext","context"],["fpDirection","direction"],["fpTransferable","transferable"]].forEach(([id,k])=>{const el=$(id);el.innerHTML="";if(!f[k].length){el.className="fingerprint-values empty";el.textContent="To be discovered"}else{el.className="fingerprint-values";f[k].forEach(v=>{const c=document.createElement("span");c.className="fp-chip";c.textContent=v;el.appendChild(c)})}})}function render(id){state.currentQuestionId=id;const qq=q[id];pending=state.answers[id]?arr(state.answers[id]):[];$("questionText").textContent=qq.text;$("questionHelp").textContent=qq.help;$("answerOptions").innerHTML="";$("otherAnswerWrap").hidden=true;qq.options.forEach(opt=>{const b=document.createElement("button");b.type="button";b.className="answer-option "+(qq.type==="multi"?"multi":"");b.dataset.option=opt;b.innerHTML=`<span class="answer-option-icon">•</span><span style="flex:1"><strong>${labels[opt]||opt}</strong></span><span class="answer-check">✓</span>`;if(pending.includes(opt))b.classList.add("selected");b.addEventListener("click",()=>{if(opt==="other"){
        const currentlySelected=b.classList.contains("selected");
        const willSelect=qq.type==="single" ? true : !currentlySelected;
        $("otherAnswerWrap").hidden=!willSelect;
        if(willSelect)$("otherAnswerInput").focus();
      }if(qq.type==="single"){pending=[opt];$("answerOptions").querySelectorAll(".answer-option").forEach(x=>x.classList.remove("selected"));b.classList.add("selected")}else{b.classList.toggle("selected");pending=b.classList.contains("selected")?[...new Set([...pending,opt])]:pending.filter(x=>x!==opt)}$("nextQuestionButton").disabled=!pending.length;
      if(!pending.includes("other")){
        $("otherAnswerWrap").hidden=true;
        $("otherAnswerInput").value="";
      }
    });$("answerOptions").appendChild(b)});$("nextQuestionButton").disabled=!pending.length}function commit(){const id=state.currentQuestionId;if(!id||!pending.length)return false;const qq=q[id];state.answers[id]=qq.type==="single"?pending[0]:[...pending];if(id==="careerStage")state.careerStage=state.answers[id];if(!state.history.includes(id))state.history.push(id);renderFP();save();return true}
function buildCareerPathOverview(){
  if(!careerPathCards) return;

  careerPathCards.innerHTML="";
  const a=state.answers;

  const establishedValues=[];
  const emergingValues=[];
  const exploringValues=[];
  const bridgeValues=[];

  if(a.existingDomains){
    establishedValues.push(...arr(a.existingDomains).map(x=>labels[x]||x));
  }
  if(a.functionalIdentity){
    establishedValues.push(...arr(a.functionalIdentity).map(x=>labels[x]||x));
  }

  if(a.emergingPath){
    const emerging=arr(a.emergingPath).map(x=>labels[x]||x);
    if(a.transitionIntent==="exploring"){
      exploringValues.push(...emerging);
    }else{
      emergingValues.push(...emerging);
    }
  }

  if(a.transferable){
    bridgeValues.push(...arr(a.transferable).map(x=>labels[x]||x));
  }

  function addPathCard(type,title,detail,klass){
    const card=document.createElement("div");
    card.className=`career-path-card ${klass}`;

    const typeEl=document.createElement("span");
    typeEl.className="path-type";
    typeEl.textContent=type;

    const titleEl=document.createElement("strong");
    titleEl.textContent=title;

    const detailEl=document.createElement("span");
    detailEl.textContent=detail;

    card.append(typeEl,titleEl,detailEl);
    careerPathCards.appendChild(card);
  }

  if(establishedValues.length){
    addPathCard(
      "Established",
      [...new Set(establishedValues)].slice(0,4).join(" → "),
      "Built from your current and previous professional background.",
      "established"
    );
  }

  if(emergingValues.length){
    addPathCard(
      "Emerging",
      [...new Set(emergingValues)].slice(0,4).join(" → "),
      "A direction you are actively preparing for or expanding into.",
      "emerging"
    );
  }

  if(exploringValues.length){
    addPathCard(
      "Exploring",
      [...new Set(exploringValues)].slice(0,4).join(" → "),
      "A possible direction Kadima should keep open while your profile evolves.",
      "exploring"
    );
  }

  if(bridgeValues.length){
    addPathCard(
      "Transferable bridge",
      [...new Set(bridgeValues)].slice(0,4).join(" · "),
      "Background that may strengthen opportunities across different career paths.",
      "emerging"
    );
  }

  if(!careerPathCards.children.length){
    addPathCard(
      "Current direction",
      "Still being discovered",
      "Kadima will refine this as your journey continues.",
      "exploring"
    );
  }
}

function lockDiscoveryControls(){
  const questionCard=document.querySelector(".question-card");
  if(questionCard) questionCard.classList.add("discovery-complete");

  if(previousQuestionButton) previousQuestionButton.disabled=true;
  if(nextQuestionButton) nextQuestionButton.disabled=true;
}

function confirmProfileFoundation(){
  state.complete=true;
  save();

  const reviewCard=document.getElementById("reviewPanel");
  if(reviewCard) reviewCard.classList.add("completed");

  if(profileCompletionState) profileCompletionState.hidden=false;

  if(continueToExperienceButton){
    continueToExperienceButton.disabled=false;
  }

  lockDiscoveryControls();
}

function complete(){state.complete=true;$("discoveryPanel").hidden=true;$("reviewPanel").hidden=false;$("continueToExperienceButton").disabled=false;renderFP();buildCareerPathOverview();lockDiscoveryControls();save();const wrap=$("reviewFingerprint");wrap.innerHTML="";Object.entries(state.fingerprint).forEach(([k,v])=>{const d=document.createElement("div");d.className="review-group";d.innerHTML=`<strong>${k}</strong><span>${v.length?v.join(" · "):"To be discovered"}</span>`;wrap.appendChild(d)})}
const phoneCountries=[{"name": "Argentina", "code": "AR", "dial": "+54", "flag": "🇦🇷"}, {"name": "Australia", "code": "AU", "dial": "+61", "flag": "🇦🇺"}, {"name": "Austria", "code": "AT", "dial": "+43", "flag": "🇦🇹"}, {"name": "Belgium", "code": "BE", "dial": "+32", "flag": "🇧🇪"}, {"name": "Bolivia", "code": "BO", "dial": "+591", "flag": "🇧🇴"}, {"name": "Brazil", "code": "BR", "dial": "+55", "flag": "🇧🇷"}, {"name": "Canada", "code": "CA", "dial": "+1", "flag": "🇨🇦"}, {"name": "Chile", "code": "CL", "dial": "+56", "flag": "🇨🇱"}, {"name": "China", "code": "CN", "dial": "+86", "flag": "🇨🇳"}, {"name": "Colombia", "code": "CO", "dial": "+57", "flag": "🇨🇴"}, {"name": "Costa Rica", "code": "CR", "dial": "+506", "flag": "🇨🇷"}, {"name": "Denmark", "code": "DK", "dial": "+45", "flag": "🇩🇰"}, {"name": "Ecuador", "code": "EC", "dial": "+593", "flag": "🇪🇨"}, {"name": "Egypt", "code": "EG", "dial": "+20", "flag": "🇪🇬"}, {"name": "Finland", "code": "FI", "dial": "+358", "flag": "🇫🇮"}, {"name": "France", "code": "FR", "dial": "+33", "flag": "🇫🇷"}, {"name": "Germany", "code": "DE", "dial": "+49", "flag": "🇩🇪"}, {"name": "Greece", "code": "GR", "dial": "+30", "flag": "🇬🇷"}, {"name": "India", "code": "IN", "dial": "+91", "flag": "🇮🇳"}, {"name": "Ireland", "code": "IE", "dial": "+353", "flag": "🇮🇪"}, {"name": "Israel", "code": "IL", "dial": "+972", "flag": "🇮🇱"}, {"name": "Italy", "code": "IT", "dial": "+39", "flag": "🇮🇹"}, {"name": "Japan", "code": "JP", "dial": "+81", "flag": "🇯🇵"}, {"name": "Mexico", "code": "MX", "dial": "+52", "flag": "🇲🇽"}, {"name": "Netherlands", "code": "NL", "dial": "+31", "flag": "🇳🇱"}, {"name": "New Zealand", "code": "NZ", "dial": "+64", "flag": "🇳🇿"}, {"name": "Norway", "code": "NO", "dial": "+47", "flag": "🇳🇴"}, {"name": "Panama", "code": "PA", "dial": "+507", "flag": "🇵🇦"}, {"name": "Paraguay", "code": "PY", "dial": "+595", "flag": "🇵🇾"}, {"name": "Peru", "code": "PE", "dial": "+51", "flag": "🇵🇪"}, {"name": "Poland", "code": "PL", "dial": "+48", "flag": "🇵🇱"}, {"name": "Portugal", "code": "PT", "dial": "+351", "flag": "🇵🇹"}, {"name": "Singapore", "code": "SG", "dial": "+65", "flag": "🇸🇬"}, {"name": "South Africa", "code": "ZA", "dial": "+27", "flag": "🇿🇦"}, {"name": "South Korea", "code": "KR", "dial": "+82", "flag": "🇰🇷"}, {"name": "Spain", "code": "ES", "dial": "+34", "flag": "🇪🇸"}, {"name": "Sweden", "code": "SE", "dial": "+46", "flag": "🇸🇪"}, {"name": "Switzerland", "code": "CH", "dial": "+41", "flag": "🇨🇭"}, {"name": "Türkiye", "code": "TR", "dial": "+90", "flag": "🇹🇷"}, {"name": "United Arab Emirates", "code": "AE", "dial": "+971", "flag": "🇦🇪"}, {"name": "United Kingdom", "code": "GB", "dial": "+44", "flag": "🇬🇧"}, {"name": "United States", "code": "US", "dial": "+1", "flag": "🇺🇸"}, {"name": "Uruguay", "code": "UY", "dial": "+598", "flag": "🇺🇾"}, {"name": "Venezuela", "code": "VE", "dial": "+58", "flag": "🇻🇪"}];
const dialCodeButton=$("dialCodeButton"),dialCodeMenu=$("dialCodeMenu"),dialSearchInput=$("dialSearchInput"),
dialCodeResults=$("dialCodeResults"),dialFlag=$("dialFlag"),dialCodeText=$("dialCode"),dialCodePicker=$("dialCodePicker");

const savedProfileForDial = JSON.parse(localStorage.getItem("kadimaProfile") || "{}");
let selectedDialCountry =
  phoneCountries.find(c => c.code === savedProfileForDial?.contact?.dialCountryCode) ||
  phoneCountries.find(c => c.code === onboarding.countryCode) ||
  phoneCountries.find(c => c.name.toLowerCase() === String(onboarding.location || "").toLowerCase()) ||
  phoneCountries.find(c => c.code === "US");

function renderDialCountries(query=""){
  const q=query.trim().toLowerCase();
  const results=phoneCountries.filter(c=>!q||c.name.toLowerCase().includes(q)||c.code.toLowerCase().includes(q)||c.dial.includes(q));
  dialCodeResults.innerHTML="";
  if(!results.length){
    const empty=document.createElement("div");empty.className="dial-empty";empty.textContent="No country found";dialCodeResults.appendChild(empty);return;
  }
  results.forEach(c=>{
    const b=document.createElement("button");b.type="button";b.className="dial-option"+(selectedDialCountry&&selectedDialCountry.code===c.code?" selected":"");
    b.innerHTML=`<span class="flag">${c.flag}</span><span class="country-name">${c.name}</span><span class="calling-code">${c.dial}</span>`;
    b.addEventListener("click",()=>selectDialCountry(c));dialCodeResults.appendChild(b);
  });
}
function selectDialCountry(c){
  selectedDialCountry=c;dialFlag.textContent=c.flag;dialCodeText.textContent=c.dial;
  state.contact.dialCode=c.dial;state.contact.dialCountryCode=c.code;dialCodeMenu.hidden=true;dialCodeButton.setAttribute("aria-expanded","false");save();
}
function openDialMenu(){dialCodeMenu.hidden=false;dialCodeButton.setAttribute("aria-expanded","true");renderDialCountries(dialSearchInput.value);setTimeout(()=>dialSearchInput.focus(),0)}
function closeDialMenu(){dialCodeMenu.hidden=true;dialCodeButton.setAttribute("aria-expanded","false")}
dialCodeButton.addEventListener("click",()=>dialCodeMenu.hidden?openDialMenu():closeDialMenu());
dialSearchInput.addEventListener("input",()=>renderDialCountries(dialSearchInput.value));
document.addEventListener("click",e=>{if(!dialCodePicker.contains(e.target))closeDialMenu()});

if(selectedDialCountry){
  dialFlag.textContent=selectedDialCountry.flag;
  dialCodeText.textContent=selectedDialCountry.dial;
  state.contact.dialCode=selectedDialCountry.dial;
  state.contact.dialCountryCode=selectedDialCountry.code;
}
renderDialCountries();
$("startDiscoveryButton").addEventListener("click",()=>{$("contactPanel").hidden=true;$("discoveryPanel").hidden=false;render(next()||"careerStage")});$("nextQuestionButton").addEventListener("click",()=>{if(!commit())return;const n=next();n?render(n):complete()});$("previousQuestionButton").addEventListener("click",()=>{const id=state.history.pop()||"careerStage";render(id)});$("addOtherAnswerButton").addEventListener("click",()=>{const v=$("otherAnswerInput").value.trim();if(!v)return;const id="custom:"+v;labels[id]=v;pending=pending.filter(x=>x!=="other");pending.push(id);$("otherAnswerWrap").hidden=true;$("nextQuestionButton").disabled=false});$("backButton").addEventListener("click",()=>window.location.href="personal-info.html");$("skipButton").addEventListener("click",save);$("adjustButton").addEventListener("click",()=>{
  $("reviewPanel").hidden=true;
  $("reviewPanel").classList.remove("completed");
  if(profileCompletionState) profileCompletionState.hidden=true;
  $("discoveryPanel").hidden=false;
  state.complete=false;
  const questionCard=document.querySelector(".question-card");
  if(questionCard) questionCard.classList.remove("discovery-complete");
  previousQuestionButton.disabled=false;
  nextQuestionButton.disabled=false;
  render(state.history[state.history.length-1]||"careerStage");
});$("finishProfileButton").addEventListener("click",()=>{confirmProfileFoundation();});$("continueToExperienceButton").addEventListener("click",save);



if(backToDetailsButton){
  backToDetailsButton.addEventListener("click",()=>{
    $("discoveryPanel").hidden=true;
    $("reviewPanel").hidden=true;
    $("contactPanel").hidden=false;
    save();
  });
}
