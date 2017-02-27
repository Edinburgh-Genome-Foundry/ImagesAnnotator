<!-- src/components/Home.vue -->

<template lang="pug">
div
  h1 Images Annotator
  h3.text-center Label your images, get a summary spreadsheet
  //- label.btn.btn-default.btn-file.center-block(style={width: '200px'})
  //-   | Select some pictures
  //- input(type="file" class="hidden" multiple=1 @change='changeImages' class="file" name="files")
  fileuploader(v-model='images')
  .diaporama(v-if='images.length')
    div(v-for='image, i in images', :key='i' v-if='i === index')
      h4.text-center {{i+1}}/{{images.length}} : {{image.name}}
      .images-div
        span.helper
          .container
            img(:src='image.content')
      input.center-block(v-model='image.annotation',
                            @keydown.enter='changeIndex(index + 1)',
                            @keydown.ctrl.space='changeIndex(index - 1)',
                            placeholder='Type a comment',
                            :ref="'current'")
      .infos Press <b>Enter</b> for the next picture, <b>Ctrl+Space</b> for the previous picture
    .btn.btn-default.center-block(style={width: '150px'} @click='getSummary') Get summary
</template>

<script>
import Vue from 'vue'
import download from 'downloadjs'
import fileuploader from './widgets/FileUploader'
export default {
  data () {
    return {
      index: 0,
      images: [],
      focused: true
    }
  },
  methods: {
    changeIndex: function (val) {
      this.index = Math.max(0, Math.min(val, this.images.length - 1))
      Vue.nextTick(() => {
        if (this.$refs.current) {
          this.$refs.current[0].focus()
        }
      })
    },
    changeImages: function (evt) {
      var files = evt.target.files
      var self = this
      self.images = []
      for (var i = 0; i < files.length; i++) {
        var file = files[i]
        let name = file.name
        if (files[i].type.substring(0, 5) === 'image') {
          var reader = new window.FileReader()
          reader.onloadend = function (ev) {
            if (ev.target.readyState === window.FileReader.DONE) {
              self.images.push({
                name: name,
                content: ev.target.result,
                annotation: ''
              })
            }
          }
          reader.readAsDataURL(files[i])
        }
      }
      this.changeIndex(0)
    },
    getSummary: function () {
      var content = this.images.map(function (im) {
        return im.name + '\t' + im.annotation
      }).join('\n')
      download(content, 'annotations.txt', 'text/csv')
    }
  },
  components: {
    fileuploader
  },
  watch: {
    images: function (val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>
h1 {
  margin-bottom: 0px;
}
h3 {
  margin-bottom: 40px;
}
.images-div {
  height: 350px;
  text-align: center;
}

.images-div .container {
  width: 90%;
  margin: 20px auto;
  resize: both;
  overflow: auto;
}
.images-div .container img {
  width: 90%;
  border: 2px solid black;

}

.helper {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

input {
  width: 100%;
}

.infos {
  font-size: 10px;
  margin-bottom: 20px;
}

.diaporama {
  max-width: 80%;
  margin: 0 auto;
  padding: 20px 30px 20px 30px;
  background-color: #f7f9fc;
  margin-top: 20px;
  margin-bottom: 20px;

}
</style>
