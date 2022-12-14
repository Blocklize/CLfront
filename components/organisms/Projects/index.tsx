import React from 'react'
import Row from '../../molecules/Row'
import Project from '../../molecules/Project'

const Projects = () => {
  const [projects, setProjects] = React.useState([])

  const fetchData = async () => {
    var data = JSON.stringify({
      "limit": 4
    });

    var config = {
      method: 'post',
      headers: {
        'X-Parse-Application-Id': 'dR30zBB72X8Hsrquh4DgPWRnJe8Nhd8N8AcQpXVU',
        'X-Parse-REST-API-Key': 'wFa33ak4LMUXxJpFtQbt1qtRaF4ALicVHSzjKFGi',
        'Content-Type': 'application/json'
      },
      body: data
    };

    await fetch('https://parseapi.back4app.com/parse/functions/retornar-projeto', config)
      .then(resp => resp.json())
      .then(json => {
        setProjects(Object.values(json.result))
      })
      .catch(error => {
        throw error
      })
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  return (
    <Row>
      {
        projects &&
        projects.map((item: any, index: number) => (
          <Project
            id={item.acronimo}
            name={item.nome}
            src={item.logo.url}
            desc={item.resumo}
            key={index}
          />
        ))
      }
    </Row>
  )
}

export default Projects