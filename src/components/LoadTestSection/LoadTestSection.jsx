import { useEffect, useState } from "react";
import Preloader from "../base/Preloader";
import Button from "../base/Button/Button";
import User from "../../data/user";
import UserCard from "./UserCard";

export default function LoadTestSection() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  async function loadJson() {
    setLoading(true);

    const response = await fetch("https://dummyjson.com/users");
    const result = await response.json();

    const usersData = result.users.map((userData) => new User(userData));

    // await new Promise((resolve) => setTimeout(resolve, 2000));

    setData(usersData);
    setLoading(false);
  }

  useEffect(() => {
    loadJson();
  }, []);

  return (
    <section>
      <Button onClick={loadJson} disabled={loading}>
        {loading ? "Loading..." : "Reload"}
      </Button>
      {loading ? (
        <Preloader fit={75} />
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr", // Два равных столбца
            gap: "20px",
            marginTop: "20px",
            height: "70vh",
          }}
        >
          <pre
            style={{
              backgroundColor: "#f8f9fa",
              padding: "15px",
              borderRadius: "20px",
              overflow: "auto",
              whiteSpace: "pre-wrap",
              textAlign: "left",
              height: "65vh",
              resize: "vertical",
            }}
          >
            {JSON.stringify(data, null, 2)}
          </pre>
          <ul
            style={{
              backgroundColor: "#f8f9fa",
              padding: "15px",
              borderRadius: "20px",
              overflow: "auto",
              whiteSpace: "pre-wrap",
              height: "65vh",
              resize: "vertical",
            }}
          >
            {data.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
