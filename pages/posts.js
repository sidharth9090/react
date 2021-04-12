// File - /pages/index.js
import { useEffect, useState } from "react";
import { useAppContext } from "../context/context";

export default function posts() {
  const [posts, setPosts] = useState([]);
  const { authenticatedName } = useAppContext();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(res => {
        console.log(res)

        setPosts(res)
      })
  }, []);
  return (
    <>
      <div style={{ textAlign: "left", margin: "5%" }} >
        <h2 style={{ textAlign: "center", margin: "5%" }}>Hello {authenticatedName}</h2>
        <table>
          <tbody>
            <tr>
              <th>User Id</th>
              <th>Title </th>
              <th>Body</th>
            </tr>
            {posts?.map((post) => (
              <tr key={post.id}>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>

              </tr>
            ))}
          </tbody>
        </table>            </div>
      {/* </Layout> */}
    </>
  )
}
