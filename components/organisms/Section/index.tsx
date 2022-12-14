import React from 'react'

type Props = {
  id: string,
  label: string,
  desc: string,
  hidden: boolean,
  className: string,
  children: any,
  justify: string
}

const Section = ({ id, label, desc, hidden, className, children, justify }: Props) => {
  return (
    <section
      id={id}
      role="region"
      className={className}
      aria-labelledby={label}
      aria-describedby={desc}
      aria-hidden={hidden}
    >
      <div
        id={`${id}__container`}
        className="container"
      >
        <div className={`row d-flex justify-content-${justify}`}>
          {children}
        </div>
      </div>
    </section>
  )
}

export default Section