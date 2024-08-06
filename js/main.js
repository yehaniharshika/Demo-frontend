//save
$("#savepost").click(function () {
    console.log("click save post button");

    let postId = $("#post-id").val();
    ;
    let postTitle = $("#post-title").val();
    ;
    let postText = $("#post-text").val();
    let postCategory = $("#post-category").val();

    console.log(postId);
    console.log(postTitle);
    console.log(postText);
    console.log(postCategory);

    $.ajax({
        url: "http://localhost:8080/blog/savePost",
        method: "POST",
        contentType: "application/json",
        "data": JSON.stringify({
            "id": postId,
            "title": postTitle,
            "text": postText,
            "category": postCategory
        }),
        success: function (results) {
            console.log(results);
            alert('nice success')
        },
        error: function (error) {
            console.log(error)
            alert('owww')
        }
    })

    loadTable();
    console.log("loading table")
});

//update
$("#updatepost").click(function () {
    console.log("click update post button");

    let postId = $("#post-id").val();
    let postTitle = $("#post-title").val();
    let postText = $("#post-text").val();
    let postCategory = $("#post-category").val();

    console.log(postId);
    console.log(postTitle);
    console.log(postText);
    console.log(postCategory);

    $.ajax({
        url: "http://localhost:8080/blog/updatePost",
        method: "PUT",
        contentType: "application/json",
        "data": JSON.stringify({
            "id": postId,
            "title": postTitle,
            "text": postText,
            "category": postCategory
        }),
        success: function (results) {
            console.log(results);
            alert('nice update')
        },
        error: function (error) {
            console.log(error)
            alert('not update')
        }
    })
});

$("#detetepost").click(function () {
    let postId = $("#post-id").val();

    console.log(postId);

    $.ajax({
        url: `http://localhost:8080/blog/delete/${postId}`,
        method: "DELETE",
        contentType: "application/json",

        success: function (results) {
            console.log(results);
            alert('nice delete')
        },
        error: function (error) {
            console.log(error)
            alert('not deleted')
        }
    })
});

$("#getAll").click(function () {
    $.ajax({
        url: "http://localhost:8080/blog/getAllPost",
        method: "GET",
        contentType: "application/json",

        success: function (results) {
            console.log(results);
            alert('nice get all detail')
        },
        error: function (error) {
            console.log(error)
            alert('not get')
        }
    })
});


