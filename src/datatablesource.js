export const userColumns = [
    { field: "_id", headerName: "ID", width: 150 },
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img
                        className="cellImg"
                        src={
                            params.row.img ||
                            "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                        }
                        alt="avatar"
                    />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },

    {
        field: "country",
        headerName: "Country",
        width: 100,
    },
    {
        field: "city",
        headerName: "City",
        width: 100,
    },
    {
        field: "phone",
        headerName: "Phone",
        width: 150,
    },
];

export const hotelColumns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "type", headerName: "Type", width: 200 },
    { field: "title", headerName: "Title", width: 250 },
    { field: "city", headerName: "City", width: 100 },
];

export const roomColumns = [
    { field: "_id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 230 },
    { field: "desc", headerName: "Description", width: 200 },
    { field: "price", headerName: "Price", width: 100 },
    { field: "maxPeople", headerName: "Max People", width: 100 },
];
