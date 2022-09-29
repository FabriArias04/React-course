import celular from "../celular.jpg"
import '../index.css';

export default function App(props) {
  return (
      <main>
        <div class="card">
            <img src={celular} class="card-img-top" alt="imagen del"/>
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">{props.description}</p>
            </div>
        </div>
      </main>   
  );
}
