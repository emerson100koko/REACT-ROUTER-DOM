type Props = {
    title: string;
}

export default function Card({title}: Props) {
    return (
      <main>
        <section>
          <div className="title-home container">
            <h2>{title}</h2>
          </div>
        </section>
      </main>
    );
  }
  