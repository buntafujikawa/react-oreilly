import React, { useState, useEffect } from "react";
import { FixedSizeList } from "react-window";
import faker from "faker";

const bigList = [...Array(5000)].map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar()
}))

function List({ data = [], renderItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

export default function App() {
  // const renderItem = item => (
  //   <div style={{ display: "flex" }}>
  //     <img src={item.avatar} alt={item.name} width={50} />
  //     <p>
  //       {item.name} - {item.email}
  //     </p>
  //   </div>
  // )
  //
  // return <List data={bigList} renderItem={renderItem} />

  const renderRow = ({ index, style }) => (
    <div style={{ ...style, ...{ display: "flex" } }}>
      <img
        src={bigList[index].avatar}
        alt={bigList[index].name}
        width={50}
      />
      <p>
        {bigList[index].name} - {bigList[index].email}
      </p>
    </div>
  );

  return (
    <FixedSizeList
      height={window.innerHeight}
      width={window.innerWidth - 20}
      itemCount={bigList.length}
      itemSize={50}
    >
      {renderRow}
    </FixedSizeList>
  );
}


// function GitHubUser({ login }) {
//   const [data, setData] = useState();
//   const [error, setError] = useState();
//   const [loading, setLoading] = useState(false);
//
//   useEffect(() => {
//     if (!login) return;
//     setLoading(true);
//     fetch(`https://api.github.com/users/${login}`)
//     .then(data => data.json())
//     .then(setData)
//     .then(() => setLoading(false))
//     .catch(setError);
//   }, [login]);
//
//   if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
//   if (loading) return <h1>loading...</h1>;
//   if (!data) return null;
//
//   return (
//     <div className="githubUser">
//       <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
//       <div>
//         <h1>{data.login}</h1>
//         {data.name && <p>{data.name}</p>}
//         {data.location && <p>{data.location}</p>}
//       </div>
//     </div>
//   );
// }
//
// export default function App() {
//   return <GitHubUser login="moonhighway" />;
// }
