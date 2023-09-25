type Props = {
    name: string;
}


export default function Listing({name}: Props) {
  return (
    <div className="container">
      <ul>
        <li>{name}</li>
      </ul>
    </div>
  );
}