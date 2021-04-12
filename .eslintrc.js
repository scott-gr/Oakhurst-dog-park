module.exports = {
  'globals': {
    __PATH_PREFIX__: true,
  },
  'extends': `react-app`,
  'no-restricted-imports': [
    'error',
    {
      paths: [
        {
          name: 'react-icons-kit/entypo',
          message: 'Please use react-icons-kit/entypo/your-icon instead.',
        },
        {
          name: 'react-icons-kit/fa',
          message: 'Please use react-icons-kit/fa/your-icon instead.',
        },
        {
          name: 'react-icons-kit/feather',
          message: 'Please use react-icons-kit/feather/your-icon instead.',
        },
        {
          name: 'react-icons-kit/icomoon',
          message: 'Please use react-icons-kit/icomoon/your-icon instead.',
        },
        {
          name: 'react-icons-kit/iconic',
          message: 'Please use react-icons-kit/iconic/your-icon instead.',
        },
        {
          name: 'react-icons-kit/ikons',
          message: 'Please use react-icons-kit/ikons/your-icon instead.',
        },
        {
          name: 'react-icons-kit/ionicons',
          message: 'Please use react-icons-kit/ionicons/your-icon instead.',
        },
        {
          name: 'react-icons-kit/linea',
          message: 'Please use react-icons-kit/linea/your-icon instead.',
        },
        {
          name: 'react-icons-kit/md',
          message: 'Please use react-icons-kit/md/your-icon instead.',
        },
        {
          name: 'react-icons-kit/metrize',
          message: 'Please use react-icons-kit/metrize/your-icon instead.',
        },
        {
          name: 'react-icons-kit/noto_emoji_regular',
          message:
            'Please use react-icons-kit/noto_emoji_regular/your-icon instead.',
        },
        {
          name: 'react-icons-kit/oct',
          message: 'Please use react-icons-kit/oct/your-icon instead.',
        },
        {
          name: 'react-icons-kit/typicons',
          message: 'Please use react-icons-kit/typicons/your-icon instead.',
        },
      ],
    },
  ],
}
