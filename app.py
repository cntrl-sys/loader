from flask import Flask, jsonify
from flask_cors import CORS
import instaloader

app = Flask(__name__)
CORS(app)

L = instaloader.Instaloader()

@app.route("/download/<username>")
def download(username):
    try:
        profile = instaloader.Profile.from_username(L.context, username)

        posts = []
        for i, post in enumerate(profile.get_posts()):
            posts.append(post.url)
            if i >= 9:
                break

        return jsonify(posts)

    except Exception as e:
        return jsonify({"error": str(e)})

@app.route("/")
def home():
    return "API läuft"