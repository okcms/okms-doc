// {
//     taskTimer(() => this.debugger());
//     function taskTimer(callback, time = 500) {
//         this.timer = window.setInterval(() => callback.call(this), time);
//         this.debugger = () => { debugger };
//         this.cancel = () => window.clearInterval(this.timer);
//     }
// }


// class DebugTask {
//     constructor(time = 500) {
//         this.time = time
//     }

//     runTask() {
//         this.timer = window.setInterval(() => {
//             debugger
//         }, this.time)
//     }
// }

(function () {
    const HI = 'Hey,小朋友，来了赶紧给你虎哥点赞，不然我胖虎打死你...';
    function debugTask() {
        const osDate = new window["Date"]();
        debugger;
        if (new window["Date"]() - osDate < 10) return false;
        window["document"]['body']['innerHTML'] = HI;
        return true
    }

    function runTask() {
        while (debugTask()) {
            debugTask()
        }
    }
    debugTask() ? runTask() : window['onblur'] = () => setTimeout(() => { runTask() }, 500);
})();

window.onload = () => console.log(window.Docsify.version);
