import React from 'react'
import Footer from './Footer'
const Contact = () => {
  return (
    <section className='contact' id='contact'>
        <div className="contact_headingbox">
            <h2 className="contact_headingbox-heading">Kontakt</h2>
        </div>
        <p className="contact_description">Napisz do mnie szybko przez formularz lub ręcznie: xkamilptx@gmail.com</p>
        <div className="contact_content">
            <form action="https://getform.io/f/c1e6c263-fdf3-4007-9e9d-56cfdc240954" method="POST">
                <input type="text" name="name" id="name" placeholder='Imię i nazwisko'/>
                <input type="email" name="email" id="email" placeholder='Adres email'/>
                <textarea name="message" id="message" placeholder='Wiadomość'/>
                <button type="submit">wyślij wiadomość</button>
            </form>
        </div>
        <Footer />
    </section>
  )
}

export default Contact