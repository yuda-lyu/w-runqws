import WRunqwsClient from './src/WRunqwsClient.mjs'
//import WRunqwsClient from './dist/w-runqws-client.umd.js'

//client: Consumer

let opt = {
    url: 'ws://localhost:8080',
    token: '*',
}

let missionTopic = 'parser|texts'

//new
let wo = new WRunqwsClient(opt)

wo.on('open', function() {
    console.log('client nodejs[port:8080]: open')

    // //delQueueByTopic
    // wo.delQueueByTopic(missionTopic)
    //     .then(function(msg) {
    //         console.log('delQueueByTopic', msg)
    //     })

    //subTopic
    wo.subTopic(missionTopic)

})
wo.on('openOnce', function() {
    console.log('client nodejs[port:8080]: openOnce')
})
wo.on('close', function() {
    console.log('client nodejs[port:8080]: close')
})
wo.on('error', function(err) {
    console.log('client nodejs[port:8080]: error', err)
})
wo.on('reconn', function() {
    console.log('client nodejs[port:8080]: reconn')
})
wo.on('broadcast', function(data) {
    console.log('client nodejs[port:8080]: broadcast', data)
})
wo.on('deliver', function(data) {
    //console.log('client nodejs[port:8080]: deliver', data)
})
wo.on('queueChange', function(topic, id, input, output, state) {
    //console.log('client nodejs[port:8080]: queueChange', topic, id, input, output, state)
    console.log('queueChange', input, output, state)

    //ready queue
    if (topic === missionTopic && state === 'ready') {

        setTimeout(function() {

            //output
            output = 'done(' + input.replace('#', '') + ')'

            //state
            state = 'finish'

            //modifyQueue
            wo.modifyQueue(topic, id, input, output, state)

        }, 1000)

    }

})

