<template>
  <div class="post">
    <!-- Header: Author Image and Date -->
    <header>
      <img src="@/assets/default_profile_pic.png" :alt="`${post.authorName}'s profile picture`" width="35" height="35" />
      <span>{{ formattedDate }}</span>
    </header>

    <!-- Post Text -->
    <p v-html="formattedText" class="post-text"></p>

    <!-- Post Image -->
    <img v-if="post.postImage" :src="post.postImage" alt="Couldn't load image" width="300" class="postImg"/>

    <!-- Like Button -->
    <div class="likes-container">
      <div class="like" @click="toggleLike(post.id)">
        <img :src="likeButtonImage" alt="Like" width="25" height="25" />
      </div>

      <!-- Post Likes -->
      <div class="post-likes">
        <p>{{ post.postLikes }}</p>
      </div>
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
    getPostById() {
      return this.$store.getters.getPostById;
    },
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
    likeButtonImage() {
      return this.post.isLiked
        ? require('@/assets/youtube-like-button-png-12.png')
        : require('@/assets/youtube-like-button-png-11.png');
    }
  },
  methods: {
    toggleLike(postId) {
      this.$store.dispatch('toggleLike', postId);
    }
  },
};
</script>

<style scoped>
.post {
  font-family: 'Roboto', sans-serif;
  border: 1px;
  padding: 20px;
  background-color: rgb(173, 225, 176);
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 50%;
  align-content: center;
  margin-bottom: 1em;
}

.postImg {
  margin: 0.5em 0em 1em 0em;
}

.post span {
  font-size: 0.85em;
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

.post-text {
  font-size: 1.15em;
  font-weight: 400;
}

.post-likes p {
  font-size: 1.25em;
  margin: 0;
}

.likes-container {
  display: flex;
  align-items: center;
  gap: 0.8em;
}
</style>
