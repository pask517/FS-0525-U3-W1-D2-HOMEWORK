import SingleBook from "./SingleBook"

const BookList = (props) => {
  return props.array.map((book) => {
    return (
      <SingleBook
        key={book.asin}
        title={book.title}
        price={book.price}
        category={book.category}
        img={book.img}
      />
    )
  })
}
export default BookList
