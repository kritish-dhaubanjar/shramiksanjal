export default (context, inject) => {
  const paginate = ({ per, limit, total, current }) => {
    let lower = null;
    let upper = null;
    let previous = null;
    let next = null;
    let _pages = [];

    let total_pages = Math.ceil(total / per);

    if (total_pages > limit) {
      let _lower = current - Math.floor(limit / 2);
      let _upper = current + Math.floor(limit / 2);

      lower = _lower >= 1 ? _lower : 1;
      upper = _upper <= total_pages ? _upper : total_pages;

      if (upper - lower + 1 < limit) {
        if (lower == 1) upper = limit;
        else lower = total_pages - limit + 1;
      }

      previous = current == 1 ? null : current - 1;
      next = current == total_pages ? null : current + 1;
    } else {
      lower = 1;
      upper = total_pages;
    }

    for (let i = lower; i <= upper; i++) {
      _pages.push(i);
    }

    return {
      total_pages: total_pages,
      current,
      previous,
      next,
      range: _pages
    };
  };
  inject("paginate", paginate);
};
