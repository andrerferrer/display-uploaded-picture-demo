## Goal
This is an app to teach how to display a preview for your file `<input>`.
This demo was created from [this one](https://github.com/andrerferrer/basic-photo-demo).

[Check my other demos](https://github.com/andrerferrer/dedemos/).

### If you want to check it Locally
```sh
gh_repository='git@github.com:andrerferrer/display-uploaded-picture-demo.git'
git clone $gh_repository demo
cd demo
bundle install
yarn install
rails db:create db:migrate db:seed
rails s

# now you can go to http://localhost:3000/
```

## [How to](app/javascript/components/file_input_preview.js)
```js
  // We find the input with the id of the file input
  const photoInput = document.getElementById('restaurant_photo');
  // If it exists (we don't want it to break on other pages, right?)
  if (photoInput) {
    // Add an event listener (change) to the input
    photoInput.addEventListener('change', (event) => {
      // grab the file that was selected
      const uploadedImage = event.currentTarget.files[0];
      // create a URL for it on this page
      const imageUrl = window.URL.createObjectURL(uploadedImage);
      // find the preview where we will display the image
      const previewDiv = document.getElementById('preview')
      // show the image there :D
      previewDiv.innerHTML = `<img src='${imageUrl}'>`
    });
  }

```

### [Another solution](app/javascript/components/file_input_preview_another_solution.js)

Inspirations:
- https://developer.mozilla.org/en-US/docs/Web/API/FileReader#readAsDataURL%28%29
- https://stackoverflow.com/questions/53877660/looking-to-display-picture-on-upload-in-rails
- https://stackoverflow.com/questions/61158176/how-to-display-a-tempfile-image-in-views-with-rails-active-storage
- https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded

Good luck, have fun!
