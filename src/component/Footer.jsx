
function Footer({todo}) {
  return (
    <div className="footer">
      Total {todo.length} {todo.length==1?"item":"items"}
    </div>
  )
}

export default Footer
