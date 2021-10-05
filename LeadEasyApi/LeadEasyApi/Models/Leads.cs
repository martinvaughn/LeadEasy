using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LeadEasyApi.Models
{
    public partial class Leads
    {
        [Key]
        [Column("LeadID")]
        public int LeadId { get; set; }
        [Required]
        [StringLength(255)]
        public string Name { get; set; }
        [StringLength(255)]
        public string Email { get; set; }
        [StringLength(20)]
        public string Phone { get; set; }
        public int Status { get; set; }
        [StringLength(1000)]
        public string Notes { get; set; }
    }
}
