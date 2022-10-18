const Demo = function () {
    this.calledCount = 0;
};

Demo.prototype.getMessage = function (val) {
    var message = 'Not Define.';

    switch (val) {
        case 0:
            message = 'Hello GitHub Actions!';
            break;
        case 1:
            message = 'This repository is sandbox for GitHub Actions.'
    
        default:
            break;
    }
    this.calledCount++;

    return message;
}

exports.Demo = Demo;

