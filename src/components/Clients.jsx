// eslint-disable-next-line no-unused-vars
import { clients } from "../constants";
import styles, { layout } from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`${styles.flexCenter} sm:min-w-[192 px] flex-1 min-w-[120px]`}
        >
          <img
            src={client.logo}
            alt="Logo"
            className="sm:w-[192px] w-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
