const Demo = function () {
};

Demo.prototype.getMessage = function (val) {
    var message = '';

    switch (val) {
        case 0:
            message = 'Hello GitHub Actions!';
            break;
        case 1:
            message = 'This repository is sandbox for GitHub Actions.'
            break;
        default:
            message = 'Not Define.'
            break;
    }

    return message;
}

exports.Demo = Demo;

