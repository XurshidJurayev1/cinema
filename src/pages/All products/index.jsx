import React, { useEffect, useState } from 'react';
import cinema from '../../services/api/cinema';
import Movies from './Movies';
import s from './Movie.module.css';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    cinema.get().then((resp) => {
      setData((resp.data.results));

    }).catch((e) => {
      console.log('error message: ' + e.message);
    });
  }, []);

  console.log(data);


  return (
    <div className={s.main}>
      <div className={s.container}>
        {data.length > 0 && data.map((movie) => {
          return <Movies key={movie.id} {...movie} />;
        })
        }
      </div>
    </div>
  );

}

export default Home;