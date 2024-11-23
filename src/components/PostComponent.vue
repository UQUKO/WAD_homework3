<template>
  <div class="post">
    <!-- Header: Author Image and Date -->
    <header>
      <img src="@/assets/default_profile_pic.png" :alt="`${post.authorName}'s profile picture`" width="35" height="35" />
      <span>{{ formattedDate }}</span>
    </header>

    <!-- Post Text -->
    <p v-html="formattedText"></p>

    <!-- Post Image -->
    <img v-if="post.postImage" :src="post.postImage" alt="Couldn't load image" width="300" />

    <!-- Like Button -->
    <div class="like">
      <img src="@/assets/youtube-like-button-png-11.png" alt="Like" width="25" height="25" />
    </div>

    <!-- Post Likes -->
    <div class="post-likes">
      <p>Likes: {{ post.postLikes }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "PostComponent",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedDate() {
      return new Date(this.post.dateCreated).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    },
    formattedText() {
      return this.post.postText.replace(/\n/g, "<br>");
    },
  },
};
</script>

<style scoped>
.post{
    border: 1px;
    padding: 20px;
    background-color: rgb(173, 225, 176);
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 50%;
    align-content: center;
}

header {
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-bottom: 1em;
}

header img {
  border-radius: 50%;
}

.like img {
  cursor: pointer;
}
</style>