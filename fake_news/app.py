import streamlit as st
import joblib
import os
#import joblib
import streamlit as st

# get the current directory of app.py
BASE_DIR = os.path.dirname(__file__)

# load model and vectorizer from same folder
model = joblib.load(os.path.join(BASE_DIR, "fake_news_model.pkl"))
vectorizer = joblib.load(os.path.join(BASE_DIR, "vectorizer.pkl"))

st.title("📰 Fake News Detection App")

# Load model and vectorizer
#model = joblib.load("fake_news_model.pkl")
#vectorizer = joblib.load("vectorizer.pkl")

st.title("📰 Fake News Detection App")
st.write("Paste a news article below and check if it's **Real** or **Fake**.")

# User input
user_input = st.text_area("Enter news text here:")

if st.button("Predict"):
    if user_input.strip():
        # Transform input
        input_vectorized = vectorizer.transform([user_input])
        prediction = model.predict(input_vectorized)[0]

        if prediction == 1:
            st.success("✅ This looks like **Real News**")
        else:
            st.error("⚠️ This looks like **Fake News**")
    else:
        st.warning("Please enter some text.")
