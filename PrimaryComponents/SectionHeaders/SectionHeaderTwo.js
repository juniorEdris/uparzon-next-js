const SectionHeaderTwo = (props) => {
    return (
        <div className="section_header_two chilldren-gap-bottom">
            <h5 className={`${props.list && 'font-size-point7rem'} title`}>{ props.section_title }</h5>
        </div>
     );
}
 
export default SectionHeaderTwo;