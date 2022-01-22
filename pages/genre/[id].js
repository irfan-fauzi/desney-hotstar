import React from 'react';
import { Container, Gap, Layout, LayoutDetail } from '../../components';
import CONFIG from '../../utils/config/config';
import { fetchGenre } from '../../utils/fetch-ssr';

export const getStaticPaths = async () => {
  const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${CONFIG.KEY}&language=en-US`)
  const data = await res.json()
  
  const paths = data.genres.map((genre) => {
    return {
      params: { id: genre.id.toString()}
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const genres = await fetchGenre(id)
  return {
    props: {
      genres
    }
  }
}


const GenresMovies = ({genres}) => {
  console.log(genres)
  return (
    <LayoutDetail>
      <Gap className='h-10' />
      <Container>
      <section className=''>
      <p className='mt-10'>detail</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatem tempore vel! Ut odit ipsam facilis quas dolores nulla itaque ex laudantium cumque voluptas esse sint, molestias expedita asperiores repudiandae architecto corporis quidem maxime dicta quo, nostrum molestiae dignissimos unde. Velit quo quisquam nemo esse sed deserunt, aperiam unde ducimus, quibusdam harum eos officia nam corporis vitae molestiae earum, sequi totam nulla aliquam veritatis quidem itaque accusantium! Mollitia reprehenderit molestiae architecto eius, ratione, cum voluptates non obcaecati dolores quae dolorum perspiciatis sed ab animi explicabo optio nemo harum natus minus consequatur porro! Praesentium perspiciatis ipsa consequatur vel enim. Iure, id.</p>
      </section>
      </Container>
    </LayoutDetail>
  )
};

export default GenresMovies;
