
// Parte feita pelo Eronar

// Styles
import {Container, Form} from "./styles"

export default function Subscribe() {
  return (
    <Container>
      <Form onSubmit={e => e.preventDefault()}>
        <h2>SUBSCRIBE</h2>
        <span>Sign up for newsletter</span>
        <input type="email" placeholder="Your Email"/>
        <a href="#">
          SUBMIT
        </a>
      </Form>
    </Container>
  )
}