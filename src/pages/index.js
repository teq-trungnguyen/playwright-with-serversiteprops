import Card from "@src/components/Card";
import { useEffect, useState } from "react";

//FOR CLIENT

// export const getServerSideProps = async () => {
//   const res = await fetch(
//     "https://api.eazy-mock.teqn.asia/mock/cacf0e7e-f495-40a4-910f-4cc5441e87ac/64/animals"
//   );
//   const animals = await res.json();
//   return { props: { animals } };
// };

// export default function Home({ animals }) {
//   const [animals, setAnimals] = useState([]);
//   useEffect(() => {
//     const shiba = async () => {
//       const res = await fetch(
//         "https://api.eazy-mock.teqn.asia/mock/cacf0e7e-f495-40a4-910f-4cc5441e87ac/64/animals"
//       );
//       const data = await res.json();
//       setAnimals(data);
//     };
//     shiba();
//   }, []);

//   return (
//     <main className="w-screen h-screen flex items-center justify-center gap-6 px-3">
//       {animals &&
//         animals?.map((item, index) => {
//           return <Card animal={item} key={index} />;
//         })}
//     </main>
//   );
// }

//FOR SERVER

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.eazy-mock.teqn.asia/mock/cacf0e7e-f495-40a4-910f-4cc5441e87ac/64/animals"
  );
  const animals = await res.json();
  return { props: { animals } };
};

export default function Home({ animals }) {
  return (
    <main className="w-screen h-screen flex items-center justify-center gap-6 px-3">
      {animals &&
        animals?.map((item, index) => {
          return <Card animal={item} key={index} />;
        })}
    </main>
  );
}
