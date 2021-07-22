<template>
  <div class="bg-yellow-400">
    <div class="bg-yellow-400 pb-10 m-auto md:pb-0 transition-all">
      <div class="text-2xl bg-yellow-400 p-3 m-auto flex items-center justify-center"> Jitsi Video Call!</div>
      <div class="bg-yellow-400 h=1/12 w=full">
          <div class="py-2"></div>
      </div>
    </div>
    <div class='max-w-4xl -mt-6 w-full h-auto justify-center bg-white shadow-xl rounded-lg overflow-hidden mx-auto flex flex-col px-5 pt-5 space-y-5 border-b-2 border-dashed border-yellow-400'>
        <div>
          <span class="text-lg pt-4 pb-9 px-1 left-1 w-28 text-gray-400">Your Name:</span>
          <br>
          <span class="text-3xl pt-4 pb-9 px-1 left-1 w-30">{{name}}</span>
          <div class="flex flex-auto">
            <span class="text-lg pt-5 pb-6 px-1 left-1 w-25 text-gray-400">Your Room:</span>
            <span class="text-lg pt-5 pb-6 pl-20 pr-5 left-1 w-20">{{room}}</span>
          </div>
        </div>
    </div>
    <div class='max-w-4xl mb-10 w-full h-auto justify-center bg-white shadow-xl rounded-lg overflow-hidden mx-auto flex flex-col px-4 pb-5 space-y-5'>
        <div class = 'pt-10 px-4 pb-5 m-auto content-center'>
          <button @click='openRoom()' :style="{display : buttondisplay}" class="px-2 py-3 w-full m-auto bg-red-700 rounded-xl text-white shadow-lg hover:bg-red-400 hover:text-white">Join Here!</button>
          <div :style="{display : videodisplay}">
              <div class = "block">
                <div id="meet"></div>
                <button @click='leaveRoom()' :style="{display : videodisplay}" class="px-2 py-3 mt-5 mb-3 w-full m-auto bg-red-700 rounded-xl text-white shadow-lg hover:bg-red-400 hover:text-white">Leave Meeting</button>
              </div>
          </div>
        </div>
    </div>
    <div class="bg-yellow-400 h=1/12 w=full">
          <div class="py-5"></div>
      </div>
  </div>
    
  
</template>
<script>
export default {
  head() {
        return {
        title: 'Video Conference', // Other meta information
        script: [
            { hid: 'stripe', src: 'https://meet.jit.si/external_api.js', defer: true }
        ]
        }
    },
  computed:{
    name:{
      get () {
        return this.$store.state.name
      }
    },
    room:{
      get () {
        return this.$store.state.room
      }
    },
    videodisplay:{
      get () {
        return this.$store.state.videodisplay
      },
      set(value){
        this.$store.commit('setVideoDisplay',value)
      }
    },
    buttondisplay:{
      get () {
        return this.$store.state.buttondisplay
      },
      set(value){
        this.$store.commit('setButtonDisplay',value)
      }
    },
  },
  data: () => ({
    search: "",
    api: null,
    username: "ken",
    joinclicked: false
  }),

    /*
  mounted() {
    this.openRoom();
  },
  */

  methods: {
    startConference() {
      var _this = this;
      try {
        const domain = "meet.jit.si";
        const options = {
          roomName: this.room,
          width: '48em',
          height: '48em',
          parentNode: document.querySelector("#meet"),
          interfaceConfigOverwrite: {
            filmStripOnly: false,
            SHOW_JITSI_WATERMARK: false,
            SHOW_WATERMARK_FOR_GUESTS: false,
            DEFAULT_REMOTE_DISPLAY_NAME: 'New User',
            MOBILE_APP_PROMO: false,

            SHOW_PROMOTIONAL_CLOSE_PAGE: false,
            //SHOW_BRAND_WATERMARK: true,

            //JITSI_WATERMARK_LINK: '',
            //Jitsi watermark destination when clicked

            SHOW_CHROME_EXTENSION_BANNER: false,
            //if set to true, it will show chrome extension banner message on top-right

            //SHOW_POWERED_BY: true,
            //SHOW_PPOWERED_BY will show the text powered by jitsi.org on bottom left

            //HIDE_DEEP_LINKING_LOGO: false,
            //JITSI_WATERMARK_LINK: ''
             /*
             * DEPRECATED!
             * This config might be moved to config.js as `toolbarButtons`.
             */
            // TOOLBAR_BUTTONS: [
            //     'microphone', 'camera', 'closedcaptions', 'desktop', 'embedmeeting', 'fullscreen',
            //     'fodeviceselection', 'hangup', 'profile', 'chat', 'recording',
            //     'livestreaming', 'etherpad', 'sharedvideo', 'settings', 'raisehand',
            //     'videoquality', 'filmstrip', 'invite', 'feedback', 'stats', 'shortcuts',
            //     'tileview', 'select-background', 'download', 'help', 'mute-everyone', 'mute-video-everyone', 'security'
            // ],
            TOOLBAR_BUTTONS: ['microphone', 'camera', 'closedcaptions', 'profile', 'fullscreen','chat', 'settings',
                              'raisehand','invite','recording','security','tileview','select-background','videoquality',
                              'filmstrip','etherpad','stats']
            // 'hangup' is the way to leave the meeting, include it in toolbar buttons if you don't want to use your own html buttons
            //TOOLBAR_BUTTONS: []
            //if left empty, will diasble the toolbar(make it disappear)
          },
          configOverwrite: {
            doNotStoreRoom: true,
            disableSimulcast: false,
            startWithAudioMuted: true,
            //enableWelcomePage: true
            //prejoinPageEnabled: false,
            disableRemoteMute: true,
            //SHOW_JITSI_WATERMARK: false
          },
        };

        this.api = new JitsiMeetExternalAPI(domain, options);
        this.api.addEventListener("videoConferenceJoined", () => {
          console.log("Local User Joined");
          this.api.executeCommand("displayName", this.username);
          //_this.api.executeCommand("displayName", _this.username);
        });
      } catch (error) {
        console.error("Failed to load Jitsi API", error);
      }
    },
    openRoom() {
      // verify the JitsiMeetExternalAPI constructor is added to the global..
      if (window.JitsiMeetExternalAPI) 
      {
        this.username = this.name;
        this.$store.commit('setVideoDisplay',"block")
        this.$store.commit('setButtonDisplay',"none")
        this.startConference();
      } 
      else 
      {
        alert("Jitsi Meet API script not loaded");
      }
    },
    leaveRoom() {
      this.api.executeCommand('hangup',this.room);

      this.$store.commit('setVideoDisplay',"none")
      this.$store.commit('setButtonDisplay',"block")

      //because iframe ads still stays after meeting ended, we go back to homepage
      
      //Link to first page
      this.$router.push('/');

    }
  },
};
</script>

