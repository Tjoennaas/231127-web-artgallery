


const accordion= document.querySelector('.accordion');
const accordionToggle = accordion.querySelector('.accordion__toggle');
const accordionContent = accordion.querySelector('.accordion__content');
const collapse = accordion.querySelector('.collapse');

	accordionToggle.addEventListener('click', () => {
	accordionContent.classList.add('accordion__content--visible')		
	});

   collapse.addEventListener('click', () => {
	accordionContent.classList.remove('accordion__content--visible')		
		});
	







     //Filtering  image with price, style, type and format 


    const filterButtons = document.querySelectorAll('.filter-button');
    const imageItems = document.querySelectorAll('.image-item');
    const imageContainer = document.querySelector('.image-container');


    
	let clikedBy = null;
    let clickedValue= null;

   
	//Create a function 
    //The function is called when button is clicked.
    const filterList = (event) => {              
    const currentButton = event.currentTarget;
    let currentButtonFilterBy = currentButton.dataset.filterBy;
	let currentButtonFilterValue = currentButton.dataset.filter;
	

	if (currentButtonFilterValue === clickedValue) {
		currentButtonFilterValue = '*'
	}
    clikedBy = currentButtonFilterBy;

	
	//Creates an array that match the filter criteria.
    const filteredItems = [...imageItems].filter(item => {       
		if (clickedValue === '*') {
			return true;
		} else {
		
			return item.dataset[currentButtonFilterBy] === currentButtonFilterValue;
		}
	});

	//Clears the content of imageContainer and  then add the filtered image.
	imageContainer.innerText = '';
	filteredItems.forEach(item => {
		imageContainer.appendChild(item);
	});                                                 
		


	filterButtons.forEach(button => {
		button.classList.remove('filter-button--active');
	})
	if (currentButtonFilterValue !== '*') {
		currentButton.classList.add('filter-button--active');
	}
}   
     filterButtons.forEach(filterButton => {
	filterButton.addEventListener('click', filterList);
});











  //This function is made so you can click on each image  and go to the component

     const overviewButtons = document.querySelectorAll('.image-item');
     const components = document.querySelectorAll('.component');
     const removeBackgroundItem = document.querySelector(".container");
     const addButtonStyling = document.querySelector(".styling"); 

     
	 
	  overviewButtons.forEach(overviewButton => {
      const displayComponent = (event) => {  // Get the current button that triggered the event
	  const button = event.currentTarget;            
      const componentToShow = button.dataset.componentToShow; // Get the value of the 'data-component-to-show' attribute from the button
      removeBackgroundItem.style.display = "none";
	  addButtonStyling.style.visibility = "visible";
     
    

     components.forEach(component => {
     component.classList.remove('component--visible');

     const componentName = component.dataset.componentName;

 if (componentName === componentToShow) {
            component.classList.add('component--visible');
          }
        });
      }

      overviewButton.addEventListener('click', displayComponent);
    });


     
	


//This function is created so i can change the background color
	function backgroundChange(color) {
		document.body.style.background = colorarray[color];
	  }
	 
	  let colorarray = ["#DFE0B3", "#CDDBC6","#E2DED4"];
	  let colorBox = document.querySelector(".colorbox");
	  
	  colorarray.forEach(function (color, innerText) {
		let span = document.createElement("span");
		span.style.backgroundColor = color;
		span.addEventListener("click", function () {
			backgroundChange( innerText);
		});
		colorBox.appendChild(span);
	  });







	//  when you click a button, the image vil apear in the background
	function createButtonsAndFrame(containerClass, imageUrls) {
		const frameButtonContainer = document.querySelector( '.' + containerClass + '-button-container'); 
		const frameImageContainer = document.querySelector('.' + containerClass + '-image-container')
		
		 
  
		  imageUrls.forEach((imageUrl, innerText) => {
  
			  //Creates buttons
			const frameButton = document.createElement('div');
			frameButton.classList.add('frame-button');
			frameButton.textContent = 'Frame ' + (innerText + 1);
			frameButton.addEventListener('click', function () { 
			  showImage(containerClass, innerText); 
			});
			frameButtonContainer.appendChild(frameButton);
		
			  
			  //Creates image container
			const frameImage = document.createElement('div');
			frameImage.classList.add('frame-image');
			const img = document.createElement('img');
			img.src = imageUrl;
			frameImage.appendChild(img);
			frameImageContainer.appendChild(frameImage);
		  });
		
		  showImage(containerClass, 0);
		}
		
	   //  Function for visibility and styling when a button is clicked.
		function showImage(containerClass, innerText) {
		  const frameButtons = document.querySelectorAll('.' + containerClass + '-button-container .frame-button');
		  const frameImages = document.querySelectorAll('.' + containerClass + '-image-container .frame-image');
		
		  //Remove the activ class
		  frameButtons.forEach(function (button) {
			button.classList.remove('active');
		  });
  
		  //Add the activ class
		  frameButtons[innerText].classList.add('active');
		
		  //Hidd image
		  frameImages.forEach(function (image) {
			image.style.display = 'none';
		  });
			//Show the clicked image
		  frameImages[innerText].style.display = 'block';
		}
		
		createButtonsAndFrame('frame', [
		  'assets/frame2.png',
		  'assets/frame1.png',
	  
		]);
		







  
  

 


