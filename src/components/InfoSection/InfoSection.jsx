import { infos } from "../../data/info";
import InfoLine from "./InfoLine";

export default function InfoSection() {
  return (
    <section>
      <ul>
        {infos.map((info) => (
          <InfoLine key={info.title} {...info} />
        ))}
      </ul>
    </section>
  );
}
