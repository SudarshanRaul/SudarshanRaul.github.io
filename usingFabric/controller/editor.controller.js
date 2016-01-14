(function () {
    'use strict';
    
    angular
        .module("DrawApp")
        .controller("EditorCtrl", editorCtrl);
    
    editorCtrl.$inject = ['$scope'];
    
    function editorCtrl($scope) {
        /*Local variable declarations*/
        var vm = this,
            canvas = new fabric.Canvas('canvas'),
            startPoint = {},
            currentShape,
            addShape = {},
            dragToDraw = {};
        
        /*Set the canvas height and width*/
        /*vm.width = prompt("Enter the width of image ",1200);
        vm.height = prompt("Enter the height of the image ",800);*/
        vm.width = 600;
        vm.height = 400;
        canvas.setHeight(vm.height);
        canvas.setWidth(vm.width);
        
        canvas.setBackgroundColor('#FFFFFF');
        
        /*Setting custom cursor for rotation*/
        canvas.rotationCursor = 'url(../images/rotate.png) 15 15,crosshair';
        
        
        canvas.renderAll();
        updateScope();
        
        vm.getActiveStyle = getActiveStyle;
        
        /*Shape selection*/
        vm.selectShape = selectShape;
        
        /*Draw selected shape*/
        vm.initializeShape = initializeShape;
        vm.drawShape = drawShape;
        vm.finalizeShape = finalizeShape;
        
        /*Template actions*/
        vm.save = save;
        
        
        /*Watch the canvas and update the scope*/
        canvas
            .on('object:selected', updateScope)
            .on('group:selected', updateScope)
            .on('path:created', updateScope)
            .on('selection:cleared', updateScope);
        
        
        vm.showContextMenu = false;
        $scope.$watch('vm.activeObject', function(newValue, oldValue) {
            if(newValue){
                canvas.bringToFront(newValue);
            }
        });
        
        /*canvas.loadFromJSON(obj, function(){
            canvas.renderAll();
        });*/
        
        $scope.$watch('vm.myRange', function(newValue, oldValue) {
            if(newValue){
                canvas.setZoom(canvas.getZoom() / 1.1) ;
                console.log(newValue);
            }            
        });
        
        $scope.$watch('vm.activeColor', function(newValue, oldValue) {
            console.log(newValue);
            vm.activeObject = canvas.getActiveObject();
            if(vm.activeObject){
                vm.activeObject.fill = newValue;
                console.log(vm.activeObject.fill);
                console.log(vm.activeObject);
                updateScope();
            }
        });
        
        
        
        /*Methods and functions*/
        function getActiveStyle(styleName, object) {
            object = object || canvas.getActiveObject();
            if (!object) {
                return '';
            }

            return (object.getSelectionStyles && object.isEditing)
                ? (object.getSelectionStyles()[styleName] || '')
                : (object[styleName] || '');
        }
        
        function setActiveStyle(styleName, value, object) {
            object = object || canvas.getActiveObject();
            if (!object) {
                return;
            }
            
            if (object.setSelectionStyles && object.isEditing) {
                var style = { };
                style[styleName] = value;
                object.setSelectionStyles(style);
                object.setCoords();
            } else {
                object[styleName] = value;
            }

            object.setCoords();
            canvas.renderAll();
        }
        
        function updateScope() {
            $scope.$$phase || $scope.$digest();
            canvas.renderAll();
        }
        
        function selectShape(shape) {
            vm.shapeSelected = shape;
            vm.drawingEnabled = true;
            canvas.defaultCursor = 'crosshair';
        }
        
        function initializeShape(event) {
            if (vm.drawingEnabled) {
                startPoint.left = angular.copy(canvas.getPointer(event).x);
                startPoint.top = angular.copy(canvas.getPointer(event).y);
                vm.startDrawing = true;
                canvas.selection = false;
                addShape[vm.shapeSelected](startPoint);
                if(currentShape){
                    canvas.add(currentShape);
                }
            }
        }
        
        function drawShape(event) {
            if (vm.drawingEnabled) {
                vm.contextMenuStyle = {};
                vm.contextMenuStyle.left = canvas.getPointer(event).x + "px";
                vm.contextMenuStyle.top = canvas.getPointer(event).y + "px";
                if (vm.drawingEnabled && vm.startDrawing) {
                    var endPoint = {},
                        shapeParams = {};
                    endPoint.left = angular.copy(canvas.getPointer(event).x);
                    endPoint.top = angular.copy(canvas.getPointer(event).y);
                    dragToDraw[vm.shapeSelected](endPoint, shapeParams);
                    currentShape.set(shapeParams);
                    canvas.renderAll();                
                    shapeParams = {};
                }
            }
        }
        
        function finalizeShape(event) {
            if(vm.drawingEnabled){
                canvas.renderAll();
                vm.startDrawing = false;
                vm.shapeSelected = '';
                vm.drawingEnabled = false;
                canvas.selection = true;
                currentShape = null;
                canvas.forEachObject(function(o) {
                    o.setCoords();
                });
            }
            canvas.defaultCursor = 'default';
            vm.activeObject = canvas.getActiveObject();
        }
        
        /*Adding methods to addShape objects*/
        addShape.rect = addRect;
        addShape.circle = addCircle;
        addShape.triangle = addTriangle;
        addShape.line = addLine;
        addShape.text = addText;
        addShape.image = addImage;
        
        function addRect(coord) {
            currentShape = new fabric.Rect({
                left: coord.left,
                top: coord.top,
                fill: '#E81313',
                width: 1,
                height: 1,
                opacity: 1
            });
        }
        
        function addCircle(coord) {
            currentShape = new fabric.Circle({
                left: coord.left,
                top: coord.top,
                fill: '#000',
                opacity: 1,
                radius: 1,
                originX: 'center',
                originY: 'center'
            });
        }
        
        function addTriangle(coord) {
            currentShape = new fabric.Triangle({
                left: coord.left,
                top: coord.top,
                fill: '#' + getRandomColor(),
                width: 50,
                height: 50,
                opacity: 0.8
            });
        }
        
        function addLine(coord) {
            currentShape = new fabric.Line([ coord.left, coord.top,  coord.left, coord.top,], {
                /*left: coord.left,
                top: coord.top,*/
                stroke: '#000',
                hasControls : false
            });
        }
        
        function addText(coord) {
            var text = 'Sample text';
            currentShape = new fabric.Text(text, {
                left: coord.left,
                top: coord.top,
                fontFamily: 'helvetica',
                angle: 0,
                fill: '#' + getRandomColor(),
                scaleX: 0.5,
                scaleY: 0.5,
                fontWeight: '',
                originX: 'left',
                hasRotatingPoint: true,
                centerTransform: true
            });
        }
        
        function addImage(coord) {
            /*var coord = getRandomLeftTop();*/

            fabric.Image.fromURL('../images/food1.jpg', function(image) {

                image.set({
                    left: coord.left,
                    top: coord.top
                })
                    .setCoords();

                canvas.add(image);
            });
            vm.drawingEnabled = false;
            vm.startDrawing = false;
        }
        
        /*Adding methods to drag to draw objects*/
        dragToDraw.circle = completeCircle;
        dragToDraw.rect = completeRect;
        dragToDraw.triangle = completeTriangle;
        dragToDraw.line = completeLine;
        /*dragToDraw.text = completeText;*/
        
        function completeCircle(endPoint, shapeParams) {
            shapeParams.radius = Math.sqrt((endPoint.left - startPoint.left) * (endPoint.left - startPoint.left) + (endPoint.top - startPoint.top) * (endPoint.top - startPoint.top));
        }
        
        function completeRect(endPoint, shapeParams) {
            shapeParams.width = (endPoint.left - startPoint.left);
            shapeParams.height = (endPoint.top - startPoint.top);
        }
        
        function completeTriangle(endPoint, shapeParams) {
            shapeParams.width = (endPoint.left - startPoint.left);
            shapeParams.height = (endPoint.top - startPoint.top);
        }
        
        function completeLine(endPoint, shapeParams) {
            shapeParams.x2 = endPoint.left;
            shapeParams.y2 = endPoint.top;
        }
        
        function save() {
            var str = canvas.toSVG();
            /*console.log(canvas.toSVG());*/
            /*angular.fromJson(canvas);
            console.log(angular.toJson(canvas));*/
            /*var str = JSON.stringify(canvas);*/
            console.log(angular.toJson(str));
            console.log(typeof(str));
        }
    }
}());