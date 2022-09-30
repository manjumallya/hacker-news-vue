<template>
    <div class="container">
        <StoryItem v-for="story in stories" :key="story.data.id" :story="story"></StoryItem>
    </div>
</template>

<script>
import StoryItem from '@/views/StoryItem.vue'

export default {
  name: 'NewStories',
  components: {
      'StoryItem': StoryItem
  },
  data: function () {
    return {
        err: '',
        stories: this.$store.state.newStories
    }
  },
  created: function () {
    if (this.$store.state.newStories.length === 0) this.$store.dispatch('fetch_new_stories')
  }
}
</script>
