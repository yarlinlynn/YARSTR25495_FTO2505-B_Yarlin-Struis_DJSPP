
export function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
}

export function changePage(id) {
    setCurrentPage(id)
}

export function nextPage() {
    if (currentPage !== pages) {
      setCurrentPage(currentPage + 1)
    }
}