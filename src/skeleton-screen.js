window.Placeload = require('./placeload.js');

export default function SkeletonScreen($window, $timeout){
    return {
        restrict: 'A',
        link: (scope, elm, attrs) => {
          let children = elm[0].children;
          const id = Math.random().toString(36).substring(7);

          const addPlaceloadElement = (element, index) => {
            let className = id + 'skeleton-screen-child' + index;
            element.classList.add(className);
            $timeout(()=>{
                let placeload = new Placeload('.' + className);
                placeload.draw({
                 height: '42px',
                 position: 'absolute'
                });
            })
          }

          for (let i = 0; i < children.length; i++) {
            addPlaceloadElement(children[i], i);
          }



        }
    }
}


SkeletonScreen.$inject = ['$window', '$timeout'];
