export default function notify(title, body){
  new Notification(title, { body })
    .onclick = () => {
      window.focus()
    }
}
