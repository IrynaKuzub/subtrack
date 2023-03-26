const Subscription = require('../models/subscription-model')

const createSubs = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a subscription',
    })
  }

  const subscription = new Subscription(body)

  if (!subscription) {
    return res.status(400).json({ success: false, error: err })
  }

  subscription
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: subscription._id,
        message: 'Subscription created!',
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Subscription not created!',
      })
    })
}

const updateSubs = (req, res) => {
  const body = req.body
console.log(body)
  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    })
  }

  Subscription.findOne({ _id: req.params.id })
    .then((subscription, err) => {
      console.log(subscription)
      if (err) {
        return res.status(404).json({
          err,
          message: 'Subscription not found!',
        })
      }
      subscription.name = body.name
           
      subscription
        .save()
        .then(() => {
          return res.status(200).json({
            success: true,
            id: subscription._id,
            message: 'Subscription updated!',
          })
        })
        .catch(error => {
          return res.status(404).json({
            error,
            message: 'Subscription not updated!',
          })
        })
    })
}

const deleteSubs = (req, res) => {
  Subscription.findOneAndDelete({ _id: req.params.id })
    .then((subscription, err) => {
      if (err) {
        return res.status(400).json({ success: false, error: err })
      }

      if (!subscription) {
        return res
          .status(404)
          .json({ success: false, error: `Subscription not found` })
      }

      return res.status(200).json({ success: true, data: subscription })
    }).catch(err => console.log(err))
}

const getSubsById = (req, res) => {
  Subscription.findOne({ _id: req.params.id })
    .then((subscription, err) => {
      if (err) {
        return res.status(400).json({ success: false, error: err })
      }

      if (!subscription) {
        return res
          .status(404)
          .json({ success: false, error: `subscription not found` })
      }
      return res.status(200).json({ success: true, data: subscription })
    }).catch(err => console.log(err))
}

const getSubs = (req, res) => {
  Subscription.find({}).then((subscription, err) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!subscription.length) {
      return res
        .status(404)
        .json({ success: false, error: `subscription not found` })
    }
    return res.status(200).json({ success: true, data: subscription })
  }).catch(err => console.log(err))
}

module.exports = {
  createSubs,
  updateSubs,
  deleteSubs,
  getSubs,
  getSubsById,
}

