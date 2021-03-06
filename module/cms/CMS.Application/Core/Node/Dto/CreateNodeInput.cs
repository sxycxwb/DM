﻿using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CMS.Core.Dto
{
    public class CreateNodeInput : CMSInputDtoBase
    {
        public string NodeIndex { get; set; }
        public string NodeName { get; set; }
        public long? ParentId { get; set; }
        public long? ChannelTemplateId { get; set; }
        public long? ContentTemplateId { get; set; }
        public string ContentModelId { get; set; }
    }
}
