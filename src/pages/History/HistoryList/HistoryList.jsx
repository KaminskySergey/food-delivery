
const HistoryList = ({children}) => {
    return (
        <>
        <ul style={{display: 'flex', flexWrap: 'wrap', margin: '-15px', justifyContent: 'center'}}>
            {children}
        </ul>
        </>
    )
}

export default HistoryList;