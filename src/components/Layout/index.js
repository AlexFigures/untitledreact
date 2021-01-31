import layoutStyle from './style.module.css'

const Layout = ({id, title, descr, urlBg, colorBg}) => {
    const layoutId = id && {id};
    const bgColor = colorBg && {backgroundColor: colorBg};
    const imgBg = urlBg && {backgroundImage: `url(${urlBg})`};
    return (
        <section className={layoutStyle.root} id={layoutId.id}>
            <div className={layoutStyle.wrapper} style={imgBg || bgColor }>
                <article>
                    <div className={layoutStyle.title}>
                        {title && <h3>{title}</h3>}
                        <span className={layoutStyle.separator}></span>
                    </div>
                    <div className={layoutStyle.desc.full}>
                        {descr && <p>{descr}</p>}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;