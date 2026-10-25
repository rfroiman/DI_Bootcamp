# KADIMA Mini Job Matcher

### Hackathon 2 — AI-Powered Document Search and Summarization

## Project Overview

KADIMA Mini Job Matcher is an AI-powered prototype that helps job seekers identify relevant career opportunities based on their professional experience and skills.

The application uses semantic search to compare a candidate's profile or resume with job descriptions and automatically generates concise summaries of the most relevant opportunities.

## Problem Statement

Job seekers often spend significant time reviewing job descriptions and determining whether opportunities align with their qualifications.

Traditional keyword-based searches may overlook relevant opportunities when different terminology is used to describe similar skills and experiences.

## Proposed Solution

KADIMA combines semantic similarity and AI-powered summarization to streamline job discovery and support faster career decisions.

### Key Features

- Professional profile input through a web interface.
- PDF and TXT resume text extraction.
- Semantic job matching using Sentence Transformers.
- Vector similarity search using FAISS.
- AI-generated job summaries using BART.
- Top three job recommendations with similarity scores.
- Interactive Gradio interface.

## Technologies

- Python
- Google Colab
- Pandas and NumPy
- Sentence Transformers (`all-MiniLM-L6-v2`)
- FAISS
- Hugging Face Transformers (`facebook/bart-large-cnn`)
- PyPDF
- Gradio

## Dataset

The prototype uses 10 synthetic job descriptions covering sales, customer success, software development, cybersecurity, data science, project management, and related technology roles.

The dataset is created by the notebook and exported as `sample_jobs.csv`.

## How to Run

1. Open `KADIMA_Mini_Job_Matcher.ipynb` in Google Colab.
2. Select a Python runtime.
3. Run the notebook cells sequentially to install dependencies, create the dataset, load the AI models, and build the FAISS index.
4. Execute the Gradio interface cell.
5. Enter a professional profile or upload a text-based PDF/TXT resume.
6. Click **Find Matching Jobs** to view the top three recommendations and their AI-generated summaries.

An internet connection is required for initial package installation and model downloads.

## Evaluation Results

Initial tests on the synthetic dataset produced:

| Metric | Result |
|---|---|
| Mean Precision@3 | 55.6% |
| Top-1 Accuracy | 100% across three test profiles |
| Average Summary Word Reduction | 63.4% |
| ROUGE-1 F1 | 0.552 on one reference example |

These results are preliminary and based on a small synthetic dataset. They do not establish real-world recommendation accuracy or hiring probability.

Similarity scores represent semantic similarity between the candidate profile and job descriptions.

## Business Value

KADIMA demonstrates how artificial intelligence can reduce the time required to review job opportunities, improve the discovery of relevant positions, and help candidates focus their job search.

The underlying approach could also support career platforms, recruitment technology, and talent-matching services.

## Limitations and Future Improvements

- Expand the dataset with real job postings.
- Improve resume processing through document chunking and structured skill extraction.
- Support Word documents and scanned PDFs.
- Evaluate recommendations using a larger, independently labeled dataset.
- Evaluate summarization quality against multiple human-written references.
- Add skill-gap analysis and personalized career recommendations.
- Integrate live job sources.

## Project Status

Functional hackathon prototype developed for educational and demonstration purposes.