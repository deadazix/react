const People = (probs)=>{
    return <div className={probs.className}>{`${probs.username} is ${probs.age} Years old`}</div>
}
export default People