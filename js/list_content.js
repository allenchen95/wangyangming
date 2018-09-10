$(function() {
    var defaultData = [
      {
        text: '历史浙商',   //一级目录
        href: '#parent1',
        tags: ['4'],
        
          nodes: [       
            {
              text: '千年浙商',
              href: '#child1',
              tags: ['2'],
              nodes: [
                {
                  text: '古越时期到魏晋南北朝（至公元6世纪）', //三级目录
                  href: '#grandchild1',
                  tags: ['0'],
                },
                {
                  text: '隋唐时期（公元6-10世纪）',
                  href: '#grandchild1',
                  tags: ['0'],
                },
              ]
            },

            {
              text: '代表人物',
              href: '#child2',
              tags: ['0'],
              nodes: [
                {
                  text: '宁波帮', //三级目录
                  href: '#grandchild1',
                  tags: ['0'],
                },
                {
                  text: '龙游帮',
                  href: '#grandchild1',
                  tags: ['0'],
                },
                {
                  text: '南浔帮',
                  href: '#grandchild1',
                  tags: ['0'],
                },
              ]
            },
          {
              text: '三大商帮',
              href: '#child2',
              tags: ['0'],
              nodes: [
                {
                  text: '宁波帮', //三级目录
                  href: '#grandchild1',
                  tags: ['0'],
                },
                {
                  text: '龙游帮',
                  href: '#grandchild1',
                  tags: ['0'],
                },
                {
                  text: '南浔帮',
                  href: '#grandchild1',
                  tags: ['0'],
                },
              ]
          },
          ]
        },
      {
        text: '当代浙商',
        href: '#parent2',
        tags: ['0']
      },
      {
        text: '浙商文献',
        href: '#parent3',
         tags: ['0']
      },
      {
        text: '浙商纪录',
        href: '#parent4',
        tags: ['0']
      },
    ];

    $('#treeview10').treeview({
      levels: 1,//默认展开的级数
      selectedBackColor:"#fff0e3",
      selectedColor:"#333",
      enableLinks: true,
      onhoverColor:"#fff0e3",
      //showTags: true,//展示标签
      data: defaultData
    });


    // Expand/collapse/toggle nodes
    $('#input-expand-node').on('keyup', function (e) {
      expandibleNodes = findExpandibleNodess();
      $('.expand-node').prop('disabled', !(expandibleNodes.length >= 1));
    });

    $('#btn-expand-node.expand-node').on('click', function (e) {
      var levels = $('#select-expand-node-levels').val();
      $expandibleTree.treeview('expandNode', [ expandibleNodes, { levels: levels, silent: $('#chk-expand-silent').is(':checked') }]);
    });

    $('#btn-collapse-node.expand-node').on('click', function (e) {
      $expandibleTree.treeview('collapseNode', [ expandibleNodes, { silent: $('#chk-expand-silent').is(':checked') }]);
    });

    $('#btn-toggle-expanded.expand-node').on('click', function (e) {
      $expandibleTree.treeview('toggleNodeExpanded', [ expandibleNodes, { silent: $('#chk-expand-silent').is(':checked') }]);
    });

    // Expand/collapse all
    $('#btn-expand-all').on('click', function (e) {
      var levels = $('#select-expand-all-levels').val();
      $expandibleTree.treeview('expandAll', { levels: levels, silent: $('#chk-expand-silent').is(':checked') });
    });

    $('#btn-collapse-all').on('click', function (e) {
      $expandibleTree.treeview('collapseAll', { silent: $('#chk-expand-silent').is(':checked') });
    });

    // Expand/collapse/toggle nodes
    $('#input-disable-node').on('keyup', function (e) {
      disabledNodes = findDisabledNodes();
      $('.disable-node').prop('disabled', !(disabledNodes.length >= 1));
    });

    $('#btn-disable-node.disable-node').on('click', function (e) {
      $disabledTree.treeview('disableNode', [ disabledNodes, { silent: $('#chk-disable-silent').is(':checked') }]);
    });

    $('#btn-enable-node.disable-node').on('click', function (e) {
      $disabledTree.treeview('enableNode', [ disabledNodes, { silent: $('#chk-disable-silent').is(':checked') }]);
    });

    $('#btn-toggle-disabled.disable-node').on('click', function (e) {
      $disabledTree.treeview('toggleNodeDisabled', [ disabledNodes, { silent: $('#chk-disable-silent').is(':checked') }]);
    });

    // Expand/collapse all
    $('#btn-disable-all').on('click', function (e) {
      $disabledTree.treeview('disableAll', { silent: $('#chk-disable-silent').is(':checked') });
    });

    $('#btn-enable-all').on('click', function (e) {
      $disabledTree.treeview('enableAll', { silent: $('#chk-disable-silent').is(':checked') });
    });
      });