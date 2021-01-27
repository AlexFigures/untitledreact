import s from './style.module.css'
const HeaderBlock = ({ title, hideBackground = false, descr }) => {
    const styleRoot = hideBackground ? {backgroundColor: 'green'} : {};
    return (
        <div>
            <div>
                { title && (<h1 className={s.header} style={styleRoot}>{title}</h1>)  }
                { descr && <p>{descr}</p>}
            </div>
        </div>
    )
}

export default HeaderBlock;