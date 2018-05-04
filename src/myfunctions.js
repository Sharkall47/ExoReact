import _ from 'lodash'

export const random_url = () => {
    const random_number = _.random(0, 1000);
    return "https://picsum.photos/200/300/?image=" + random_number
}
