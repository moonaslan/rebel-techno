import React from 'react'

export default function Roadmap() {
    const roadMap = [
        {time:"25 July, 2021", peraOne: "There are many variations of passages of Lorem Ipsum available,", peraTwo: "but the majority have suffered alteration in some form, by injected humour, or randomised words"},
        {time:"15 Nov, 2021", peraOne: "It has roots in a piece of classical Latin", peraTwo: "iterature from 45 BC, making it over 2000 years old"},
        {time:"02 Feb, 2022", peraOne: "Content here, content here', making it look like readable English.", peraTwo: "Many desktop publishing packages and web page editors now use Lorem Ipsum"},
        {time:"12 May, 2022", peraOne: "uncover many web sites still in their infancy. Various versions have evolved over the years,", peraTwo: "sometimes by accident, sometimes on purpose (injected humour and the like)."},
        {time:"Beyond", peraOne: "There are many variations of passages of Lorem Ipsum available, but the majority"}
    ]
    return (
        <>
          <div className="main-section roadMapfull" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/bg-abstract.png'})`}}>
              <div className="container">
                  <div className="roadmap-title">
                    <h2 className="main-title">Roadmap</h2>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                  </div>
                  <div className="roadmap-wrap">
                      <ul>
                          {roadMap.map((data)=>
                          <li>
                              <section>
                                  <time dateTime="25-july-2021">{data.time}</time>
                                  <p>{data.peraOne}</p>
                                  <p>{data.peraTwo}</p>
                              </section>
                          </li>
                          )}
                      </ul>
                  </div>
              </div>
          </div>  
        </>
    )
}
