
export const urls = {
    login_url:process.env.REACT_APP_API_URL + "admin/login",
    logout_url:process.env.REACT_APP_API_URL + "admin/logout",

    product_store:process.env.REACT_APP_API_URL + "admin/product",
    product_update:process.env.REACT_APP_API_URL + "admin/product/",
    product_single:process.env.REACT_APP_API_URL + "admin/product/",
    products:process.env.REACT_APP_API_URL + "admin/products",


    total_products:process.env.REACT_APP_API_URL + "admin/products/total_products",
    total_urls_count_for_each_website:process.env.REACT_APP_API_URL + "admin/products/total_urls_count_for_each_website",
    avg_price_products:process.env.REACT_APP_API_URL + "admin/products/avg_price_products",
    webiste_highest_total_prices:process.env.REACT_APP_API_URL + "admin/products/webiste_highest_total_prices",
    total_price_during_month:process.env.REACT_APP_API_URL + "admin/products/total_price_during_month",

    // search_employee:process.env.REACT_APP_API_URL + "admin/employee/search",
    // get_mangerOptions:process.env.REACT_APP_API_URL + "admin/employee/mangersOption",
    // employeesOptions:process.env.REACT_APP_API_URL + "admin/employee/employeesOption",

    // get_departmentOptions:process.env.REACT_APP_API_URL + "admin/department/departmentsOption",
    // create_employee:process.env.REACT_APP_API_URL + "admin/employee/create",
    // edit_employee:process.env.REACT_APP_API_URL + "admin/employee/update",
    // delete_employee:process.env.REACT_APP_API_URL + "admin/employee/delete",

    // create_department:process.env.REACT_APP_API_URL + "admin/department/create",
    // edit_department:process.env.REACT_APP_API_URL + "admin/department/update",
    // delete_department:process.env.REACT_APP_API_URL + "admin/department/delete",
    // search_department:process.env.REACT_APP_API_URL + "admin/department/search",
    // search_task:process.env.REACT_APP_API_URL + "admin/task/search",


}

export const routes = {
   home_route:"/admin/",
   login_route:"/admin/login",

   wishlist:"/admin/wishlist",
}

