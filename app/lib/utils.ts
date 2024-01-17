
export const formatCurrency = (amount: number) => {
  return (amount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const formatDateToLocal = (
  dateStr: string,
  locale: string = 'en-US',
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

// export const generateYAxis = (data: any) => {
//   const monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

//   // Filter by months
//   const januaryUsers = farmer.filter((item: any) => item.createdAt.includes('Jan')).length;
//   const februaryUsers = farmer.filter((item: any) => item.createdAt.includes('Feb')).length;
//   const marchUsers = farmer.filter((item: any) => item.createdAt.includes('Mar')).length;
//   const aprilUsers = farmer.filter((item: any) => item.createdAt.includes('Apr')).length;
//   const mayUsers = farmer.filter((item: any) => item.createdAt.includes('May')).length;
//   const juneUsers = farmer.filter((item: any) => item.createdAt.includes('Jun')).length;
//   const julyUsers = farmer.filter((item: any) => item.createdAt.includes('Jul')).length;
//   const augustUsers = farmer.filter((item: any) => item.createdAt.includes('Aug')).length;
//   const septemberUsers = farmer.filter((item: any) => item.createdAt.includes('Sep')).length;
//   const octoberUsers = farmer.filter((item: any) => item.createdAt.includes('Oct')).length;
//   const novemberUsers = farmer.filter((item: any) => item.createdAt.includes('Nov')).length;
//   const decemberUsers = farmer.filter((item: any) => item.createdAt.includes('Dec')).length;

//   return { monthsArr, januaryUsers, februaryUsers, marchUsers, aprilUsers, mayUsers, juneUsers, julyUsers, augustUsers, septemberUsers, octoberUsers, novemberUsers, decemberUsers };
// };

export const generateYAxis = (data: any) => {
  const monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  // Filter by months
  const januaryUsers = data?.filter((item: any) => item?.createdAt?.includes('Jan'))?.length;
  const februaryUsers = data?.filter((item: any) => item?.createdAt?.includes('Feb'))?.length;
  const marchUsers = data?.filter((item: any) => item?.createdAt?.includes('Mar'))?.length;
  const aprilUsers = data?.filter((item: any) => item?.createdAt?.includes('Apr'))?.length;
  const mayUsers = data?.filter((item: any) => item?.createdAt?.includes('May'))?.length;
  const juneUsers = data?.filter((item: any) => item?.createdAt?.includes('Jun'))?.length;
  const julyUsers = data?.filter((item: any) => item?.createdAt?.includes('Jul'))?.length;
  const augustUsers = data?.filter((item: any) => item?.createdAt?.includes('Aug'))?.length;
  const septemberUsers = data?.filter((item: any) => item?.createdAt?.includes('Sep'))?.length;
  const octoberUsers = data?.filter((item: any) => item?.createdAt?.includes('Oct'))?.length;
  const novemberUsers = data?.filter((item: any) => item?.createdAt?.includes('Nov'))?.length;
  const decemberUsers = data?.filter((item: any) => item?.createdAt?.includes('Dec'))?.length;

  return { monthsArr, januaryUsers, februaryUsers, marchUsers, aprilUsers, mayUsers, juneUsers, julyUsers, augustUsers, septemberUsers, octoberUsers, novemberUsers, decemberUsers };
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};
