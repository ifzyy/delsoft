import "@/app/contact.css"
const Contact = () => {
  return (
<div className="container-form">
  <div className="contact-box">
    <div className="right">
      <input type="text" className="field" placeholder="Your Name" />
      <input type="text" className="field" placeholder="Your Email" />
      <input type="text" className="field" placeholder="Phone" />
      <textarea placeholder="Message" className="field" defaultValue={""} />
      <button className="btn">Send</button>
    </div>
  </div>
</div>

    )
}

export default Contact
